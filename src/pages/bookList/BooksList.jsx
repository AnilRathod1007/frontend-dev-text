import React, { useEffect, useState } from "react";
import SearchBar from "../../common/SearchBar";
import "./BooksList.css";
import axios from "axios";
import { baseUrl } from "../../common/baseUrl";
import { useSelector, useDispatch } from "react-redux";
import { bookListActions } from "./store";
import Pagination from "../../common/Pagination";
import AddNewBookModal from "./AddNewBook";
import { FaSort } from "react-icons/fa";

const BooksList = () => {
  const dispatch = useDispatch();
  const booksListData = useSelector((state) => state.books.booksList);
  const paginationData = useSelector((state) => state.books.pagination);

  const [currentPage, setCurrentPage] = useState(1);
  const [sortDirection, setSortDirection] = useState("ASC");
  const [searchTerm, setSearchTerm] = useState("");
  const [editRowId, setEditRowId] = useState(null);
  const [editData, setEditData] = useState(null);
  const [reload, setReload] = useState(false);

  const handleSearch = (searchTerm) => {
    // Implement your search logic here

    console.log(searchTerm);
    setSearchTerm(searchTerm);
  };

  useEffect(() => {
    axios
      .get(
        `${baseUrl}/books?page=${currentPage}&size=${paginationData.pageSize}&DIR=${sortDirection}&title=${searchTerm}`
      )
      .then(function (response) {
        console.log("response", response?.data);
        dispatch(
          bookListActions.getBooklist({ booksList: response?.data.data })
        );
        dispatch(
          bookListActions.getPagination({
            pagination: response?.data.pagination,
          })
        );
      })
      .catch(function (error) {
        console.log(error);
      });
  }, [currentPage, paginationData.pageSize, sortDirection, searchTerm, reload]);

  const onPageChange = (page) => {
    setCurrentPage(page);
  };

  const toggleSortDirection = () => {
    setSortDirection(sortDirection === "ASC" ? "DESC" : "ASC");
  };

  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const openEditRow = (rowId) => {
    const editedBook = booksListData.find((book) => book.id === rowId);
    if (editedBook) {
      setEditData(editedBook);
      setEditRowId(rowId);
    }
  };

  const saveEditedRow = () => {
    console.log(editData);
    if (editData) {
      axios
        .put(`${baseUrl}/books/${editData.id}`, editData)
        .then(function (response) {
          console.log(response);
          if (response !== undefined) {
            setReload(!reload);
          }
        })
        .catch(function (error) {
          console.log(error);
        });
      setEditData(null);
      setEditRowId(null);
    }
  };

  return (
    <div className="main-booklist">
      <div style={{ paddingBottom: ".5rem", display: "flex" }}>
        <SearchBar onSearch={handleSearch} />
        <button className="add-button" onClick={openModal}>
          Add New Book
        </button>
      </div>

      <div style={{ overflowX: "auto", height: "80vh" }}>
        <table id="booksTable">
          <thead style={{ position: "sticky", top: "0" }}>
            <tr>
              <th style={{ cursor: "pointer" }} onClick={toggleSortDirection}>
                <span>Id</span>
                <FaSort style={{ float: "right" }} />
              </th>
              <th style={{ cursor: "pointer" }} onClick={toggleSortDirection}>
                Title
                <FaSort style={{ float: "right" }} />
              </th>
              <th style={{ cursor: "pointer" }} onClick={toggleSortDirection}>
                Author <FaSort style={{ float: "right" }} />
              </th>
              <th style={{ cursor: "pointer" }} onClick={toggleSortDirection}>
                Language <FaSort style={{ float: "right" }} />
              </th>
              <th style={{ cursor: "pointer" }} onClick={toggleSortDirection}>
                Pages <FaSort style={{ float: "right" }} />
              </th>
              <th style={{ cursor: "pointer" }} onClick={toggleSortDirection}>
                Year <FaSort style={{ float: "right" }} />
              </th>
              <th style={{ cursor: "pointer" }} onClick={toggleSortDirection}>
                Link <FaSort style={{ float: "right" }} />
              </th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {booksListData?.map((book) => (
              <tr key={book?.id}>
                <td>{book?.id}</td>
                <td>
                  {editRowId === book.id ? (
                    <input
                      type="text"
                      value={editData.title}
                      onChange={(e) => {
                        setEditData({ ...editData, title: e.target.value });
                      }}
                    />
                  ) : (
                    book.title
                  )}
                </td>
                <td>
                  {editRowId === book.id ? (
                    <input
                      type="text"
                      value={editData.author}
                      onChange={(e) => {
                        setEditData({ ...editData, author: e.target.value });
                      }}
                    />
                  ) : (
                    book?.author
                  )}
                </td>
                <td>
                  {editRowId === book.id ? (
                    <input
                      type="text"
                      value={editData.language}
                      onChange={(e) => {
                        setEditData({ ...editData, language: e.target.value });
                      }}
                    />
                  ) : (
                    book?.language
                  )}
                </td>
                <td>
                  {editRowId === book.id ? (
                    <input
                      type="text"
                      value={editData.pages}
                      onChange={(e) => {
                        setEditData({ ...editData, pages: e.target.value });
                      }}
                    />
                  ) : (
                    book?.pages
                  )}
                </td>
                <td>
                  {editRowId === book.id ? (
                    <input
                      type="text"
                      value={editData.year}
                      onChange={(e) => {
                        setEditData({ ...editData, year: e.target.value });
                      }}
                    />
                  ) : (
                    book?.year
                  )}
                </td>
                <td>
                  {editRowId === book.id ? (
                    <input
                      type="text"
                      value={editData.link}
                      onChange={(e) => {
                        setEditData({ ...editData, link: e.target.value });
                      }}
                    />
                  ) : (
                    book?.link
                  )}
                </td>
                <td>
                  {editRowId === book.id ? (
                    <button className="edit-button" onClick={saveEditedRow}>
                      Save
                    </button>
                  ) : (
                    <button
                      className="edit-button"
                      onClick={() => openEditRow(book.id)}
                    >
                      Edit
                    </button>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div style={{ float: "right" }}>
        <Pagination
          currentPage={currentPage}
          totalPages={paginationData.totalPages}
          onPageChange={onPageChange}
        />
      </div>
      <AddNewBookModal isOpen={isModalOpen} onClose={closeModal} />
    </div>
  );
};

export default BooksList;

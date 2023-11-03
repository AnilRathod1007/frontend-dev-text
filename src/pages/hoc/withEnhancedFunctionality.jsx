const withEnhancedFunctionality = (WrappedComponent) => {
  return (props) => {
    return <WrappedComponent {...props} />;
  };
};

const MyComponent = (props) => {
  return <div>{props.text}</div>;
};
const EnhancedComponent = withEnhancedFunctionality(MyComponent);

export { EnhancedComponent };

function App(){
  const [currentPage, setCurrentPage] = React.useState("counter");
  return (
    <div className="app">
      <Links currentPage={currentPage} setCurrentPage={setCurrentPage}/>
      <div className="page-content">
        {currentPage === "todo" && <Todo />}
        {currentPage === "counter" && <Counter />}
        {currentPage === "weather" && <Weather />}
        {currentPage === "profile" && <Profile />}
        {currentPage === "products" && <Products />}
        {currentPage === "comments" && <Comments />}
      </div>
    </div>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
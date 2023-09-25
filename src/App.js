import './App.css';
import React, {useState, useEffect} from "react";
import { Route, Switch } from "react-router-dom";
import AddBook from './Components/AddBook';
import NavBar from './Components/NavBar';
import Home from './Components/Home';
import Edit from './Components/Edit';

function App() {

  const [bookList,setBookList] = useState([])

  useEffect(() => {
      fetch("http://localhost:3000/books")
      .then(resp => resp.json())
      .then(data => setBookList(data))
  },[])

  function handleUpdate(newBook){
    setBookList([...bookList,newBook])
  }
  
  function updateEdit(updatedObj) {
    const newList = bookList.map((book) => {
      if (book.name === updatedObj.name) {
        return updatedObj;
      }
      return book; // Return the original book if it doesn't match
    });
    setBookList(newList);
  }
  

  // console.log(bookList[1])
  // console.log(bookList[1]?.name)

  console.log(bookList)

  return(
  <div>
    <NavBar />
    <Switch >
      <Route exact path="/">
        <Home books={bookList} />
      </Route>
      <Route path="/edit">
        <Edit handleEdit={updateEdit} books={bookList} />
      </Route>
      <Route path="/add">
        <AddBook updateBooks={handleUpdate}/>
      </Route>
    </Switch>
    </div>
  );
}

export default App;

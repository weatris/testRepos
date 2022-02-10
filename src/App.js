import React, { Component } from 'react';
import './App.css';
import {Decor} from "./components/Decor";

class App extends Component {

  constructor(props){
    super(props);
    this.state={
      act: 0,
      index: '',
      datas: []
    }
  } 

  Clear = ()=>{
    document.getElementById('name').value='';
    document.getElementById('desc').value='';
  }

  Submit = (e) =>{
    e.preventDefault();

    let datas = this.state.datas;
    let name = document.getElementById('name').value;
    let desc = document.getElementById('desc').value;

    if(this.state.act === 0){   //new
      let data = {name, desc}
      datas.push(data);
    }
    else{                      //update
      let index = this.state.index;
      datas[index].name = name;
      datas[index].desc = desc;
    }

    this.setState({
      datas: datas,
      act: 0
    });

    this.Clear();
  }

  Remove = (i) => {
    let datas = this.state.datas;
    datas.splice(i,1);
    this.setState({
      datas: datas
    });

    this.Clear();

  }

  Edit = (i) => {
    let data = this.state.datas[i];
    document.getElementById('name').value = data.name;
    document.getElementById('desc').value = data.desc;

    this.setState({
      act: 1,
      index: i
    });

  }

  render() {
    let datas = this.state.datas;
    return (
        <div>
          <Decor/>
          <div className="App">
            <h2>React CRUD</h2>
            <form ref="myForm" className="myForm">
              <input type="text" id="name" placeholder="event name" className="formField" />
              <input type="text" id="desc" placeholder="event description" className="formField" />
              <button onClick={(e)=>this.Submit(e)} className="myButton">submit </button>
            </form>
            <table className="myList">
              {datas.map((data, i) =>
                  <tr key={i}>
                    <td className='data'>{i+1}.</td>
                    <td className='data'>{data.name}</td>
                    <td className='data'>{data.desc}</td>
                    <td><button onClick={()=>this.Remove(i)} className="myListButton remove">remove </button></td>
                    <td><button onClick={()=>this.Edit(i)} className="myListButton edit">edit </button></td>
                  </tr>
              )}
            </table>
          </div>
        </div>
    );
  }
}

export default App;

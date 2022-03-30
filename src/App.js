import logo from './logo.svg';
import './App.css';
import { useState, useRef } from 'react';

function App() {

  const dataKosong = {
    namaLengkap : "",
    email : "",
    noHandphone : "",
    latar : "",
    harapan : ""
  }

  const [data, setData] = useState(dataKosong)

  const regex = /^[A-Za-z ]*$/

  const [errMsg, setErrMsg] = useState("")

  const fotoSurat = useRef(null)

  const handleInput = e => {
    const name = e.target.name
    const value = e.target.value

    if (name === "namaLengkap") {
      if(regex.test(value)){
        setErrMsg("")
      }else {
        setErrMsg("nama lengkap harus berupa huruf")
      }
    }

    setData = ({
      ...data,
      [name] : value,
    })
  }

  const handleSubmit = (e) => {
    if (errMsg !== "") {
      alert("Terdapat Data yang Masih Kosong")
    }else{
      alert('Data "${data.namaLengkap}" Berhasil Diterima')
    } e.peventDefault()
  }

  const reset = () => {
    setData(dataKosong)
    setErrMsg("")
  }

  return (
    <div className="App">
      <h1>Pendaftaran Peserta Coding Bootcamp</h1>

      <form onSubmit={handleSubmit}>
        <label>Nama Lengkap :</label>
        <input 
        type="text"
        name='nama lengkap'
        className=''
        value={data.namaLengkap}
        onChange={handleInput}
        required
        />
        <span>{errMsg}</span>

        <label>Email :</label>
        <input 
        type="email"
        name='email'
        value={data.email}
        onChange={handleInput}
        className=''
        required
        />

        <label>No Handphone :</label>
        <input 
        type="number"
        name='no handphone'
        value={data.noHandphone}
        onChange={handleInput}
        className=''
        required
        />

        <label>Latar Belakang Pendidikan :</label>
        <input 
        type="radio"
        name=' IT'
        className='radio'
        value={data.latar}
        onChange={handleInput}
        required
        /> <label  className='it'>IT</label>
        <input type="radio" className='radio'/> <label className='it'>Non IT</label>
       

        <label for="kelas">Kelas Coding yang Dipilih :</label>
        <select id="kelas" name="kelas">
        <option value="golang">Coding Backend with Golang</option>
        <option value="react">Coding Frontend with ReactJS</option>
        <option value="fullstack">Fullstack Developer</option>
        
      </select>

        <label>Foto Surat Kesungguhan :</label>
        <input 
        type="file"
        name=''
        refs={fotoSurat}
        className=''
        required
        />

        <label>Harapan Untuk Coding Bootcamp Ini :</label>
        <textarea
        value={data.harapan}
        onChange={handleInput}
         />
        <br></br>
        <input value="Submit" type="submit" className='submit' />
        <button onClick={reset}>Reset</button>
      </form>



    </div>
  );
}

export default App;

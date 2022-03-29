import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <h1>Pendaftaran Peserta Coding Bootcamp</h1>

      <form>
        <label>Nama Lengkap :</label>
        <input 
        type="text"
        name='nama lengkap'
        className=''
        />

        <label>Email :</label>
        <input 
        type="email"
        name='email'
        className=''
        />

        <label>No Handphone :</label>
        <input 
        type="number"
        name='no handphone'
        className=''
        />

        <label>Latar Belakang Pendidikan :</label>
        <input 
        type="radio"
        name=' IT'
        className='radio'
        /> <label  className='it'>IT</label>
       

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
        className=''
        />

        <label>Harapan Untuk Coding Bootcamp Ini :</label>
        <textarea />
        <br></br>
        <input value="Submit" type="submit" className='submit' />
        <button>Reset</button>
      </form>



    </div>
  );
}

export default App;

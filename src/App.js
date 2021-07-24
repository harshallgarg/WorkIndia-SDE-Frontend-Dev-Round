import './App.css'; // to inject style
import ant1 from './Assets/img/ant1.svg';
import briefcase from './Assets/img/briefcase.svg';
import edit from './Assets/img/edit.svg';
import email from './Assets/img/email.svg';
import help from './Assets/img/help.svg';
import home from './Assets/img/home.svg';
import line1 from './Assets/img/line1.svg';
import phone from './Assets/img/phone.svg';
import postjob from './Assets/img/postjob.svg';
import profile from './Assets/img/profile.svg';
import recharge from './Assets/img/recharge.svg';
import star1 from './Assets/img/star1.svg';
import wallet1 from './Assets/img/wallet1.svg';
import share1 from './Assets/img/share1.svg';


function App() {
  return (
    <div className="App">
      <div className="header"></div>

      <div className="card">
        <div className="b1">
        <p className="font1" >S and S Technologies</p>
        <a><img src={edit} alt="" /></a>
        </div>

        <img className="line" src={line1} alt="" /> 

        <div className="b2">
          <div className="bx">
          <img className="" src={phone} alt="" /> 
          <a><p className="dist2 font2"> 12345678</p></a>
          </div>
          
          <div className="bx">
          <img className="" src={email} alt="" /> 
          <a href=""><p className="dist2 font2"> john.doe@workindia.in</p></a>
          </div>

          <div className="bx">
          <img className="" src={briefcase} alt="" /> 
          <a href=""><p className="dist2 font2"> 27AAECE186G1ZR</p></a>
          </div>

        </div>

      </div>

      <div className="wallet">
         <div className="sum">
          <p className="font1" >₹2340</p>
          <p className="font2">Wallet</p>
        </div> 

        <button className="btn">Recharge</button>
      </div>

      <div className="options">
        <div className="box">
          <div className="box1">
          <img className="" src={wallet1} alt="" /> 
            <a href=""><p className="dist font3">My Transactions</p></a>
          </div>

          <div className="box1">
          <img className="" src={share1} alt="" /> 
            <a href=""><p className="dist font3" >Share this app</p></a>
          </div>

          <div className="box1">
          <img className="" src={star1} alt="" /> 
            <a href=""><p className="dist font3" >Rate Us</p></a>
          </div>

          <div className="box1">
          <img className="" src={ant1} alt="" /> 
            <a href=""><p className="dist font3" >Sign Out</p></a>
          </div>
        
        </div>
      </div>

      <div className="footer">
        <div className="footbox"> 

        <a href=""><img className="" src={home} alt="" /></a>
        <a href=""><img className="" src={recharge} alt="" /></a>
        <a href=""><img className="" src={postjob} alt="" /></a>
        <a href=""><img className="" src={help} alt="" /></a>
        <a href=""><img className="" src={profile} alt="" /></a>
        </div>
      </div>

    </div>
  );
}

export default App;

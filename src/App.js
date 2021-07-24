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
        <img src={edit} alt="" /> 
        </div>

        <img className="line" src={line1} alt="" /> 

        <div className="b2">
          <div className="bx">
          <img className="" src={phone} alt="" /> 
          <p className="dist2 font2"> 12345678</p>
          </div>
          
          <div className="bx">
          <img className="" src={email} alt="" /> 
          <p className="dist2 font2"> john.doe@workindia.in</p>
          </div>

          <div className="bx">
          <img className="" src={briefcase} alt="" /> 
          <p className="dist2 font2"> 27AAECE186G1ZR</p>
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
            <p className="dist font3">My Transactions</p>
          </div>

          <div className="box1">
          <img className="" src={share1} alt="" /> 
            <p className="dist font3" >Share this app</p>
          </div>

          <div className="box1">
          <img className="" src={star1} alt="" /> 
            <p className="dist font3" >Rate Us</p>
          </div>

          <div className="box1">
          <img className="" src={ant1} alt="" /> 
            <p className="dist font3" >Sign Out</p>
          </div>
        
        </div>
      </div>

      <div className="footer">
        <div className="footbox"> 

        <img className="" src={home} alt="" /> 
        <img className="" src={recharge} alt="" /> 
        <img className="" src={postjob} alt="" /> 
        <img className="" src={help} alt="" /> 
        <img className="" src={profile} alt="" /> 
        </div>
      </div>

    </div>
  );
}

export default App;

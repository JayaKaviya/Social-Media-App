import {SyncOutlined} from "@ant-design/icons"
import ProfileUpdate from "../../pages/user/profile/update.mjs"

const AuthForm =({
   handleSubmit, 
   name,setName, 
   email,setEmail,
   password,setPassword,
   secret,setSecret, 
   loading, 
   page, 
   username,setUsername, 
   about,setAbout,  
   profileUpdate,

})=>( 
    <form onSubmit={handleSubmit}>  
    
    {profileUpdate && ( <div className="form-group p-2"> 
            <small>
                <label className="text-muted">Username</label>
            </small>
            <input type="text" 
            value={username}
            onChange={ (e) => setUsername(e.target.value)}
            className="form-control"
            placeholder="Enter username"/>
    </div> )}

    {profileUpdate && (<div className="form-group p-2"> 
            <small>
                <label className="text-muted">About</label>
            </small>
            <input type="text" 
            value={about}
            onChange={ (e) => setAbout(e.target.value)}
            className="form-control"
            placeholder="Write about yourself..."/>
    </div> )}





    {page !== "login" && ( 
    <div className="form-group p-2"> 
            <small>
                <label className="text-muted">Your name</label>
            </small>
            <input type="text" 
            value={name}
            onChange={ (e) => setName(e.target.value)}
            className="form-control"
            placeholder="Enter name"/>
    </div>   )}

    <div className="form-group p-2"> 
            <small>
                <label className="text-muted">Email address</label>
            </small>
            <input  
              value={email}
              onChange={ (e) => setEmail(e.target.value)}
            type="email" 
            className="form-control"
            placeholder="Enter email"
             disabled={profileUpdate}
            />
    </div> 

    <div className="form-group p-2"> 
            <small>
                <label className="text-muted">Password</label>
            </small>
            <input  
             value={password}
             onChange={ (e) => setPassword(e.target.value)}
            type="password" 
            className="form-control"
            placeholder="Enter password"/>
    </div> 

    {page !=="login" && 
        <>
        <div className="form-group p-2"> 
            <small>
                <label className="text-muted">Pick a question</label>
            </small> 
             <select className="form-control"> 
                    <option>If you could time travel, which era would you visit first?</option>
                    <option>What fictional character do you most identify with?</option>
                    <option>If you could possess any superpower, what would it be?</option> 
                    <option>What is your dream vacation destination?</option> 
                    <option>What was the first concert you ever attended?</option>
             </select> 
             <small className="form-text text-muted">
             In case you forget your password, you can utilize this option to reset it.
            </small>
        </div> 

    <div className="form-group p-2">
        <input  
          value={secret}
          onChange={ (e) => setSecret(e.target.value)}
        type="text"  
        className="form-control" 
        placeholder="write your answer here" />
    </div> 
    </> }
    
    <div className="form-group p-2">
    <button 
    disabled={ 
      profileUpdate ? loading : 
      page === "login" 
        ? !email|| !password || loading
        : !name || !email || !password || !secret  || loading }
    className="btn btn-secondary btn-gradient  col-12" data-mdb-ripple-init>
      {/* Submit */} 
      {loading ? <SyncOutlined spin className="py-1"/> : "Submit"}
      </button>
    </div>
  </form> 
) 
export default AuthForm
import {SyncOutlined} from "@ant-design/icons"
import ProfileUpdate from "../../pages/user/profile/update.mjs"


const ForgotPasswordForm =({
   handleSubmit, 
  
   email,setEmail,
   newPassword,setNewPassword,
   secret,setSecret, 
   loading, 
   page, 
   username,setUsername, 
   about,setAbout,  
   profileUpdate,

})=>( 
    <form onSubmit={handleSubmit}>  
    




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
                <label className="text-muted">New Password</label>
            </small>
            <input  
             value={newPassword}
             onChange={ (e) => setNewPassword(e.target.value)}
            type="password" 
            className="form-control"
            placeholder="Enter new password"/>
    </div> 

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
    </> 
    
    <div className="form-group p-2">
    <button 
    disabled={!email || !newPassword || !secret || loading
    }
    className="btn btn-secondary btn-gradient  col-12" data-mdb-ripple-init>
      {/* Submit */} 
      {loading ? <SyncOutlined spin className="py-1"/> : "Submit"}
      </button>
    </div>
  </form> 
) 
export default ForgotPasswordForm;
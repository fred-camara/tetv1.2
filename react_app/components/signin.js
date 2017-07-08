import React from 'react';

const Login = props => {

  let email = '';
  let name = '';
  let password = '';

  let grabEmail = (e) => {
    email = e.target.value;
  };
  let grabName = (e) => {
    name = e.target.value;
  };
  let grabPassword = (e) => {
    password = e.target.value;
  };

    return (
        <div className="modal fade" id="login" tabIndex="-1" role="dialog">
           <div className="modal-dialog" role="document">
             <div className="modal-content">
             <div className="modal-header">
               <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
               <h2 className="modal-title text-center"></h2>
             </div>
             <form id="login-form" class="text-left">
                   <div>
                     <label for="lg_username" class="sr-only">Username</label>
                     <input onChange={(e) => {grabName(e)}}
                     type="text" class="form-control" name="name" id="lg_username" placeholder="username" />
                   </div>
                   <div>
                     <label for="lg_email" class="sr-only">Username</label>
                     <input onChange={(e) => {grabEmail(e)}}
                     type="text" class="form-control" id="lg_email" placeholder="email" />
                   </div>
                   <div class="form-group">
                     <label for="lg_password" class="sr-only">Password</label>
                     <input onChange={(e) => {grabPassword(e)}}
                     type="password" class="form-control" name="password" id="lg_password" placeholder="password" />
                   </div>
                 <button  onClick={()=>{props.handleloginSubmit(name, email, password)}} type="submit" class="login-button">Submit</button>
             </form>
             </div>
             <div className="modal-footer">
               <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
             </div>
           </div>
       </div>

    )
}

export default Login;

import React from "react";

const CreateUser = (props) => {

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
      <div className="modal fade" id="createUser" tabIndex="-1" role="dialog">
           <div className="modal-dialog" role="document">
             <div className="modal-content">
               <div className="modal-header">
                 <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                 <h2 className="modal-title text-center"></h2>
               </div>
               <form id="create-form" className="text-left">
                     <div>
                       <label for="create_username" className="sr-only">Username</label>
                       <input onChange={(e) => {grabName(e)}} type="text" className3="form-control" id="create_username" placeholder="username" />
                     </div>
                     <div>
                       <label for="create_email" className="sr-only">Email</label>
                       <input onChange={(e) => {grabEmail(e)}}  type="text" className3="form-control" id="create_username" placeholder="username" />
                     </div>
                     <div className="form-group">
                       <label for="create_password" className="sr-only">Password</label>
                       <input onChange={(e) => {grabPassword(e)}}  type="password" className="form-control" id="create_password" placeholder="password" />
                     </div>
                   <button onClick={()=>{props.handlecreateSubmit(name, email, password)}} type="submit" className="login-button">Submit</button>
               </form>
               <div className="modal-footer">
                 <button type="button" className="btn btn-danger" data-dismiss="modal">Close</button>
               </div>
             </div>
           </div>
      </div>
    );
}

export default CreateUser;

import React from 'react';
import Modal from 'react-modal';

 
const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};
 
Modal.setAppElement('#root')
 
function EditTodo({handleEdit,todoId,todoContent}){

  const [modalIsOpen,setIsOpen] = React.useState(false);
  const [editedContent,setEditedContent] = React.useState("")
  
  function openModal() {
    setIsOpen(true);
  }
 

 
  function closeModal(){
    setIsOpen(false);
    setEditedContent("")

  }

  const handleEditChange = (e) => {
    setEditedContent(e.target.value)
  }

  const handleEditSubmit = (e) => {
      e.preventDefault();
     
    

      closeModal()
    
    
    
  }
 
    return (
      <div>
        <button className="btn waves-effect waves-light btn-small" type="submit" name="action" style={{backgroundColor:'blue'}} onClick={openModal}>Edit</button>
        <Modal
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >
 
          
          <h5>Change this to do here : </h5>
          <span>{todoContent} :</span>
          <form >
            <input onChange={handleEditChange} value={editedContent}/>
            <div style={{display:'flex',justifyContent: 'space-between'}}>
            <button className="btn waves-effect waves-light btn-small" type="submit" name="action" style={{backgroundColor:'blue'}}  onClick={handleEditSubmit}>Edit</button>
            <button className="btn waves-effect waves-light btn-small" type="submit" name="action" style={{backgroundColor:'orange'}} onClick={closeModal}>close</button>
            </div>
          </form>
        </Modal>
      </div>
    );
}

export default EditTodo

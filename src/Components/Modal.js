import { FaTimes } from 'react-icons/fa';

import './modal.css';

const Modal = ({
  handleModalClick,
  users,
  handleOnSubmit,
  handleOnChangeMessage,
  newTaskMessage,
  handleOnChangeAssign,
  handleOnChangePriority,
  handleOnChangeDueDate,
}) => {
  return (
    <section className="modal-section">
      <div className="modal-container">
        <div className="modal-header">
          <h3 className="modal-header-title">Create a Task</h3>
          <FaTimes className="close-icon" onClick={handleModalClick} />
        </div>
        <form className="form-container" onSubmit={handleOnSubmit}>
          <div className="task-message-container">
            <label htmlFor="message">Task Message</label>
            <input
              className="message-input"
              type="text"
              name="message"
              placeholder="Learn React"
              onChange={handleOnChangeMessage}
              value={newTaskMessage}
            />
          </div>
          <div className="task-assign-container">
            <label htmlFor="assign">Assign To</label>
            <select
              className="assign-select"
              name="assign"
              onChange={handleOnChangeAssign}
            >
              {users.map((user) => (
                <option key={user.id} value={user.id}>
                  {user.name}
                </option>
              ))}
            </select>
          </div>
          <div className="task-priority-container">
            <label htmlFor="priority">Priority</label>
            <select
              className="priority-select"
              name="priority"
              onChange={handleOnChangePriority}
            >
              <option value="3">High</option>
              <option value="2">Medium</option>
              <option value="1">Low</option>
            </select>
          </div>
          <div className="task-due-date-time-container">
            <div className="task-due-date-container">
              <label htmlFor="due-date">Due Date</label>
              <input
                className="date-input"
                name="due-date"
                type="date"
                onChange={handleOnChangeDueDate}
              />
            </div>
          </div>
          <button className="add-btn" type="submit">
            Add Task
          </button>
        </form>
      </div>
    </section>
  );
};

export default Modal;

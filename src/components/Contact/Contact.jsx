const Contact = ({ contact, onDelete }) => {
  return (
    <>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button onClick={() => onDelete(contact.id)}>Delete</button>
    </>
  );
};

export default Contact;

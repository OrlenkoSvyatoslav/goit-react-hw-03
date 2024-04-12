const Contact = ({ contact }) => {
  return (
    <>
      <div>
        <p>{contact.name}</p>
        <p>{contact.number}</p>
      </div>
      <button>Delete</button>
    </>
  );
};

export default Contact;

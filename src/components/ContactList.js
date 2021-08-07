import React,{useRef} from "react";
import { Link } from "react-router-dom";
import ContactCart from "./ContactCart";


const ContactList = (props) =>
{
    const inputEl = useRef("");
    const deleteContactHandler = (id) =>
    {
        props.getContactId(id);
    };

    const renderContactList = props.contacts.map((contact) =>
    {
        return (
            <ContactCart contact={contact} clickHandler={deleteContactHandler} key={contact.id}></ContactCart>
        );
    });

    const getSearchTerm = () =>
    {
        props.searchKeyword(inputEl.current.value);
    }
    return (
        <div className="main">
            <h2>Contact List</h2>
            <Link to="/add"><button className="ui button blue" floated="right">Add Contact</button>
            </Link>
            <div className="ui search">
                <div className="ui icon input">
                    <input ref={inputEl} type="text" placeholder="Search Contacts" className="prompt" value={props.term} onChange={getSearchTerm} />
                    <i className="seach icon"></i>
                </div>
            </div>
            <div className="ui celled list">{renderContactList.length > 0 ? renderContactList : "No contacts Available"}</div>
        </div>

    )
};

export default ContactList;
import './Backdrop.css';

const Backdrop = ({show, click}) => {
    return show && <div className="backdrop" onClick={click}></div>;
};

export default Backdrop;

// show di dapat dari app.js 
// variabel click untuk menampung nilai false dari backdrop yang ada d app.js
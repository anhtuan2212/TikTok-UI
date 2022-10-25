import Header from './Header';
function HeaderOnly({ children }) {
    //khung riêng chỉ có Header
    return (
        <div>
            {/* Header ở trên cùng {thành phần tĩnh}*/}
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}

export default HeaderOnly;

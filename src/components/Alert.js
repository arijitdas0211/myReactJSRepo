export default function Alert(prop) {
    return (
        prop.alert && 
        <div className={`alert alert-${prop.alert.type} alert-dismissible fade show`} role="alert">
            <strong>{prop.alert.msg}</strong>
            {/* <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button> */}
        </div>
    );
}
import { Link } from "react-router-dom";

export default function Modal() {
    
    return (
        <>
            <input type="checkbox" id="ahaModal" class="modal-open" />
            <div class="modal">
                <div class="modal-box">
                    <h3 class="font-bold text-lg">Success!</h3>
                    <p class="pt-4">You have successfully registered!</p>
                    <p class="pt-2">Please Login.</p>
                    <div class="modal-action">
                    <Link to="/login" for="ahaModal" class="btn">OK</Link>
                    </div>
                </div>
            </div>
        </>
    );
}
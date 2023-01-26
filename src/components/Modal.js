import { useState } from "react";
import TransactionForm from "./TransactionForm";

export default function Modal() {
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <div className="flex items-center justify-center h-20       ">
                <button
                    className="px-6 py-3 text-white   bg-blue-500 rounded-md"
                    type="button"
                    onClick={() => setShowModal(true)}
                >
create Transaction                </button>
            </div>
            {showModal ? (
                <>
                    <div className="fixed inset-0 z-10 overflow-y-auto">
                        <div
                            className="fixed inset-0 w-full h-full bg-black opacity-40"
                            onClick={() => setShowModal(false)}
                        ></div>
                        <div className="flex items-center min-h-screen px-4 py-8">
                            <div className="relative w-full max-w-lg p-4 mx-auto bg-white rounded-md shadow-lg">
                                <div className="">
                                    
                                    <div className="">
                                    <TransactionForm setShowModal={setShowModal}/>
                                 
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </>
            ) : null}
        </>
    );
}


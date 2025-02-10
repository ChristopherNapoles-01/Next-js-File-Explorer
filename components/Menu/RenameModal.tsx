import { ChangeEvent, FC, FormEvent, useState } from "react";


type RenameModalType = {
    fileName? : string,
    renameFile : (name : string) => void,
    handleFileRename : (action : boolean) => void
}

const RenameModal : FC<RenameModalType>= ({fileName, renameFile, handleFileRename}) => {

    const [name,setName] = useState<string>(fileName ?? '');

    const handleChange = (e : ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }

    const handleSubmit = (e : FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        renameFile(name);
        handleFileRename(false);
    }


    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-black bg-opacity-50">
            <div className="relative p-4 w-full max-w-2xl bg-white rounded-lg shadow-lg dark:bg-gray-700">
                {/* Modal header */}
                <div className="flex items-center justify-between p-4">
                    <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Edit file name</h3>
                    <button
                        className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                        onClick={() => handleFileRename(false)}
                    >
                    <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                        <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1l6 6m0 0l6 6M7 7l6-6M7 7l-6 6" />
                    </svg>
                    <span className="sr-only">Close modal</span>
                    </button>
                </div>
            {/* Modal body */}
                <div className="p-4 space-y-4">
                    <form onSubmit={handleSubmit}>
                        <div className="mb-6">
                            <input type="text" value={name} onChange={handleChange} className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"/>
                        </div>
                        <button type="submit" className="btn btn-md">
                            Rename
                        </button>
                    </form>
                </div>
            </div>
      </div>
    );
}

export default RenameModal;
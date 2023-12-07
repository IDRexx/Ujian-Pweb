import todoBackground from '../../todo.png';

const Footer = () => {
    return (
        <footer 
        className="relative bg-cover bg-center h-48 relative mt-8"
        style={{ backgroundImage: `url(${todoBackground})` }}
        >
            <div className="w-full  mx-auto text-center py-12 md:flex border-t border-violet-300 md:items-center md:justify-between">
                <p className="block select-none cursor-grab text-sm text-gray-500 mx-auto text-center dark:text-gray-400">
                    React Redux Toolkit
                    <span className="mx-4">|</span>
                    &copy;Copyright {new Date().getFullYear()}
                    &nbsp; - &nbsp;
                    <span>All Rights Reserved.</span>
                </p>
            </div>
            <div className="text-left pl-4"> 
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Ini adalah salah satu penerapan dalam pembuatan aplikasi CRUD menggunakan API Redux.
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400">
                    Privacy Policy
                </p>
            </div>
        </footer>
    );
};

export default Footer;
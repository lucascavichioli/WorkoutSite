import React from "react";
import "../App";

function Footer(){
    return (
        <footer className="bg-secondary-100 text-center dark:bg-secondary-600">
            <div className="px-6 pt-6">
                <form action="">
                <div
                    className="gird-cols-1 grid items-center justify-center gap-4 md:grid-cols-3">
                    <div className="md:ml-auto md:mb-6">
                    <p className="text-secondary-800 dark:text-secondary-200">
                        <strong>Gostou? deixe seu e-mail para receber novos treinos</strong>
                    </p>
                    </div>

                    <div className="relative md:mb-6" data-te-input-wrapper-init>
                    <input
                        type="text"
                        className="peer block min-h-[auto] w-full rounded border-0 bg-transparent py-[0.32rem] px-3 leading-[1.6] outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 data-[te-input-state-active]:placeholder:opacity-100 motion-reduce:transition-none dark:placeholder:text-secondary-200 [&:not([data-te-input-placeholder-active])]:placeholder:opacity-0"
                        id="exampleFormControlInput1"
                        placeholder="Email address" />
                    <label
                        for="exampleFormControlInput1"
                        className="pointer-events-none absolute top-0 left-3 mb-0 max-w-[90%] origin-[0_0] truncate pt-[0.37rem] leading-[1.6] text-secondary-500 transition-all duration-200 ease-out peer-focus:-translate-y-[0.9rem] peer-focus:scale-[0.8] peer-focus:text-blue-600 peer-data-[te-input-state-active]:-translate-y-[0.9rem] peer-data-[te-input-state-active]:scale-[0.8] motion-reduce:transition-none dark:text-secondary-200 dark:peer-focus:text-secondary-200"
                        >E-mail
                    </label>
                    </div>

                    <div className="mb-6 md:mr-auto">
                    <button
                        type="button"
                        className="inline-block rounded bg-primary px-6 pt-2.5 pb-2 text-xs font-medium uppercase leading-normal text-black shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)]"
                        data-te-ripple-init
                        data-te-ripple-color="light">
                        Registrar
                    </button>
                    </div>
                </div>
                </form>
            </div>

            <div
                className="bg-secondary-200 p-4 text-center text-secondary-700 dark:bg-secondary-700 dark:text-secondary-200">
                © 2023 Copyright:
                <a
                className="text-secondary-800 dark:text-secondary-400"
                href=""
                > WorkoutApp</a
                >
            </div>
        </footer>
      )
}

export default Footer;
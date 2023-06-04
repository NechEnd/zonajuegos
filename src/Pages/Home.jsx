import React from "react";
import ItemListContainer from "../Components/ItemListContainer";

const Home = () => {
    return (
        <main className=" h-min-main pb-6">
            <div className=" py-2 text-center bg-gradient-to-b bg-lime-600 bg-lime-300 shadow-md w-full">
                <div>
                 <p className="text-lg text-slate-100 uppercase font-semibold">¡Bienvenido a la Game Zone!</p>
                </div>
            </div>
            <ItemListContainer />
        </main>
    )


};
export default Home;
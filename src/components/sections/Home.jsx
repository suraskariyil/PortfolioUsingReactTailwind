export const Home = () => {
    return <section id="home" className="min-h-screen flex items-center justify-center relative">
        <div className="text-center z-10 px-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-500 to-purple-600 bg-clip-text text-transparent leading-right" >
                Hi I'm Suras Kariyil
            </h1>

            <p className="text-gray-400 text-lg mb-8 max-w-lg mx-auto">
                Hi 👋, I'm SurasKariyil A passionate fullstack developer from India <br />
                - 🌱 I’m currently learning **python django**<br />
                - 👯 I’m looking to collaborate on **python projects**<br />
                - 💬 Ask me about **react**<br />
                - 📫 How to reach me **suraskariyil@gmail.com**
            </p>
            <div className="flex justify-center space-x-4">

                <a href="#projects" className="bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5
                 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]">View Projects</a>

                <a href="#contact" className="border border-blue 500/50 text-blue-500  py-3 px-6 rounded font-medium transition-all duration-200
                hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.2)] hover:bg-blue-500/50">Contact Me</a>


            </div>
        </div>

    </section>
}
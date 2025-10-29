
const About = () => {
  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="text-gradient">About Me</span>
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="glass-card rounded-2xl p-8 hover-glow transition-all duration-300">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Photo section */}
                <div className="flex-shrink-0">
                  <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-purple-400/50 shadow-2xl">
                    <img 
                      src="https://intimate-aqua-adfk2rj9g9.edgeone.app/manimegalai%20s.jpg"
                       alt="Manimegalai S" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                
                {/* Content section */}
                <div className="flex-1">
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
  I am a dedicated Frontend Developer with a solid background in modern web technologies and a strong commitment to delivering outstanding user experiences. I am currently pursuing a B.Tech in Artificial Intelligence and Data Science at KGiSL Institute of Technology, maintaining a CGPA of 8.15.
</p>
                  </p>
                  
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I am a Frontend and Full-Stack Developer with hands-on experience in React.js. Through internships and project work, I have developed the ability to design and implement responsive, user-friendly, and scalable web applications, effectively translating complex requirements into functional solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

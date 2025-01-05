export default function Domains() {
  const domains = [
    {
      title: "Data Science",
      tools: "Tools: Python, R, TensorFlow, Pandas",
      bgColor: "bg-pink-50",
    },
    {
      title: "Data Analytics",
      tools: "Tools: SQL, Power BI, Tableau, Excel",
      bgColor: "bg-blue-50",
    },
    {
      title: "Business Analytics",
      tools: "Tools: Excel, Power BI, Tableau, SAS",
      bgColor: "bg-green-50",
    },
    {
      title: "Full Stack Development",
      tools: "Technologies: HTML, CSS, JavaScript, Node.js, React",
      bgColor: "bg-yellow-50",
    },
    {
      title: "Digital Marketing",
      tools: "Tools: Google Ads, SEO, SEMrush, Social Media Tools",
      bgColor: "bg-pink-50",
    },
    {
      title: "Operations Management",
      tools: "Tools: Excel, SAP, ERP Software, Microsoft Project",
      bgColor: "bg-red-50",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-16">
      <h2 className="text-4xl font-bold text-center mb-16">
        Explore Our Internship Domains
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {domains.map((domain, index) => (
          <div
            key={index}
            className={`${domain.bgColor} rounded-lg p-6 text-black shadow-lg h-32 flex flex-col items-center justify-center transition-transform transform hover:scale-105 hover:shadow-xl `}
          >
            <h3 className="text-xl font-bold mb-2 text-center">{domain.title}</h3>
            <p className="text-gray-600 text-sm text-center">{domain.tools}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

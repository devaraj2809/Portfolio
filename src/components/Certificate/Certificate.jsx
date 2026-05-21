import javaCertificate from '../../assets/javaProgramingFunadmentals.pdf';
import pythonCertificate from '../../assets/The Joy of Computing using Python.jpg';

const Certificate = () => {
  return (
    <div className="container mx-auto px-4 py-8 text-white">
      <h2 className="text-3xl font-bold mb-6 text-center">
        Certificates
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Certificate 1 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4 text-center">
            Java Programming Fundamentals
          </h3>
          <a
            href={javaCertificate}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300"
          >
            View Certificate
          </a>
        </div>
        {/* Certificate 2 */}
        <div className="bg-gray-800 rounded-lg shadow-lg p-6 flex flex-col items-center">
          <h3 className="text-xl font-semibold mb-4 text-center">
            The Joy of Computing using Python
          </h3>
          <a
            href={pythonCertificate}
            target="_blank"
            rel="noopener noreferrer"
            className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
          >
            View Certificate
          </a>
        </div>

      </div>
    </div>
  );
};

export default Certificate;
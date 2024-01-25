// ResumePage.js

const ResumePage = () => {
    return (
      <div className="flex flex-col items-center justify-center h-96 my-20 mx-10 bg-orange-50">
        <a
          href="./public/resume.pdf"
          target="_blank"
          className="text-center bg-black p-4 text-white rounded my-4">
          OPEN
        </a>
      </div>
    );
};

export default ResumePage;

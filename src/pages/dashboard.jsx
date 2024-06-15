export const Dashboard = () => {
  function handleUpload() {
    // create logic upload files here
    // call the uploadFiles() function
  }

  return (
    <main className="grid grid-cols-4 gap-8">
      <section className="space-y-4">
        <div className="card flex justify-center items-center">Upload your file here</div>
        <button onClick={handleUpload}>Start Upload</button>
      </section>
      <section className="col-span-3 card h-fit space-y-2">{/* Files here */}</section>
    </main>
  );
};

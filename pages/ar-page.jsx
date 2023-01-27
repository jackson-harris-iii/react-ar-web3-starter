const ArPage = () => {

  return (
    <div
          className="mh-100 w-100"
          style={{ height: "100%", width: "400px" }}
          dangerouslySetInnerHTML={{
            __html: `<iframe
            id="my-iframe"
            style="border: 0; width: 100%; height: 100%"
            allow="camera;microphone;gyroscope;accelerometer;"
            src="demoARexperience.html">
            </iframe>`,
          }}
        />
  )
}

export default ArPage
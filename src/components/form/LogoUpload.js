import React, { useState } from 'react'


function LogoUpload({recievingLogo}, props){
    // const {field, form} = props
    const [fileResult, setFileResult] = useState(undefined)
    const [fileName, setFileName] = useState("");
    // const [fileResult, setFileResult] = useState(undefined)
  
    const handleLogoChange = (e) => {
      e.preventDefault();
      let reader = new FileReader();
      let file = e.target.files[0];
      if (file) {
          reader.readAsDataURL(file);
          reader.onloadend = () => {
              console.log(file)
              setFileName(file.name)
            //   console.log(reader.result)
              setFileResult(reader.result)
              recievingLogo(file)
            //   form.setFieldValue(field.name, reader.result)
          };
  
      }
    };

    return(
        <div className="md:flex">
            <div className="flex flex-col md:w-1/2 md:pr-3">
                <label
                htmlFor="companyLogo"
                className="h-24 w-full mb-2 border border-dashed border-blue-300 text-center cursor-pointer"
                >
                    {fileResult ? <img className='' src={fileResult} alt='logo preview' /> : <span className="text-teal-500 align-middle text-2xl">+</span>}
                    <input
                        onChange={handleLogoChange}
                        id="companyLogo"
                        name="companyLogo"
                        className="hidden"
                        type="file"
                        accept="image/*"
                    >

                    </input>
                </label>
            </div>
            <div className="flex flex-col md:w-1/2">
                <span className="text-blue-200 text-xs tracking-tight">
                {fileName ? `Uploaded: ${fileName}` : 'Please provide a .png format of your companies logo to be displayed with your job opening listing.'}
                </span>
            </div>
        </div>

    )
}
export default LogoUpload
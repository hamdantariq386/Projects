const UserForm = (props) => {
    const {
        data,
        handleSubmit,
        index,
        handleBack,
        formData,
        handleInputChange
    } = props;
    return (
        <div className="container">
          <form className='container' onSubmit={handleSubmit}>
           
            {index > 0 && 
                <a href="" onClick={handleBack} >
                  back
                </a>
            }
            <label> {data[index].label} </label>
           
            <input
                required
                id={data[index].id}
                value={formData[data[index].id]}
                onChange={handleInputChange} 
                type= {data[index].inputType}
                placeholder= {data[index].placeholder}
            />
            
            <button>
              {data[index].buttonName}
            </button>

          </form>
        </div>
    )
}

export default UserForm;
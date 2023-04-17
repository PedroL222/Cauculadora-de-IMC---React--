function Input({n,sn,label}){
    return (
        <div> 
          <label htmlFor={label}>
            <span>{label}</span>
          </label>
          <input type="text" name={label} value={n} onChange={(e)=>{sn(e.target.value)}} />
        </div>
      )
}

export default Input
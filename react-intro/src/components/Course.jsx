export function Course({ name, address, src, alt }) {
  return (
    <div>

      
      <p>{name}   ss  s </p>

      <p>teetsf</p>
      <p>{address}</p>
      <div>




        
        <img src={src} alt={`${alt}`} />
      </div>
      <div>
        <button>Enroll</button>
      </div>
      
    </div>
  );
}

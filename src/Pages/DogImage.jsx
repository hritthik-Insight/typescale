import dogphoto from "/img/dog-flower.jpg"; 

export default function DogImage() {
  return (
    <div>
      <img src={dogphoto} alt="Dog with flower" />
    </div>
  );
}
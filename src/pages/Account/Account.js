// const [image, setImage] = useState(null);
// const fileInputRef = useRef(null);

// const handleDrop = (e) => {
//   e.preventDefault();

//   const file = e.dataTransfer.files[0];

//   if (file && file.type.startsWith('image/')) {
//     const reader = new FileReader();

//     reader.onload = () => {
//       setImage(reader.result);
//     };

//     reader.readAsDataURL(file);
//   }
// };

// const handleDragOver = (e) => {
//   e.preventDefault();
// };

// const handleFileInputChange = (e) => {
//   const file = e.target.files[0];

//   if (file && file.type.startsWith('image/')) {
//     const reader = new FileReader();

//     reader.onload = () => {
//       setImage(reader.result);
//     };

//     reader.readAsDataURL(file);
//   }
// };

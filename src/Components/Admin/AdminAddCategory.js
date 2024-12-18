import React, {useEffect, useState} from 'react'
import { Col, Row } from 'react-bootstrap'
import avatar from '../../Images/avatar.png'
import { useDispatch, useSelector } from 'react-redux';
import { createCategory } from '../../Redux/actions/categoryAction';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AdminAddCategory = () => {

    const [img, setImage] = useState(avatar);
    const [name, setName] = useState("");
    const [selectedFile, setSelectedFile] = useState(null)
    // const [loading, setLoading] = useState(false);

    const dispatch = useDispatch();
    const newCategory = useSelector(state => state.allcategory.newCategory)
    const loading = useSelector(state => state.allcategory.loading)


    const onImageChange = (e) =>{
        if(e.target.files && e.target.files[0]){
            setImage(URL.createObjectURL(e.target.files[0]));
            setSelectedFile(e.target.files[0]); 

        }
        

    }

    const onTextChange = (e) =>{
        setName(e.target.value)

    }
    const handleAdd =  (e) =>{
        e.preventDefault();

        if (name == ""){
            notify("please enter name", "error")
            return
        }


        const formData = new FormData();
        formData.append("name", name)
        formData.append("image", selectedFile)

        // setLoading(true);
        dispatch(createCategory(formData));
    //    setLoading(false);
    }

    useEffect(() => {
        if (loading === false && newCategory != []){
            setImage(avatar);
            setName('');
            setSelectedFile(null);
            console.log("uploaded");
            // setLoading(true)

        if(newCategory.status === 201){
            notify("Wow so easy!", "success");

        }else{
            notify("it has a problem", "error");
        }
            

        }
    }, [loading])

    const notify = (msg, type) => {
        if (type == "success"){

            toast.success(msg);
        }else{
            toast.error(msg);
        }
        
    }
    
    return (
        <div>
            <Row className="justify-content-start ">
                <div className="admin-content-text pb-4">Add New Category</div>
                <Col sm="8">
                    <div className="text-form pb-2"> Category Image</div>
                    <div>
                        <label for="upload-photo">
                        <img src={img} alt="" height="100px" width="120px" 
                        style={{cursor: "pointer"}}/>

                        </label>
                        <input
                        type="file"
                        name="photo"
                        onChange={onImageChange}
                        id="upload-photo"
                    />
                    </div>


                    
                    <input
                        type="text"
                        value={name}
                        className="input-form d-block mt-3 px-3"
                        placeholder=" category name"
                        onChange={onTextChange}
                    />
                </Col>
            </Row>
            <Row>
                <Col sm="8" className="d-flex  ">
                    <button onClick={handleAdd} className="btn-save d-inline mt-2 ">Save </button>
                </Col>
            </Row>
            <ToastContainer />
        </div>
        
    )
}

export default AdminAddCategory
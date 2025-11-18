import React, { useCallback ,useEffect} from "react";
import { useContext } from "react";
import { Button, Input, RTE } from "../index.js";
import { AppwriteService } from "../../appwrite/service.js";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

function Postform({ post }) {
  const { register, handlesubmit, control, setValue, watch, getValues } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        content: post?.content || "",
        slug: post?.slug || "",
        status: post?.status || "active",
      },
    });

  const navigate = useNavigate();
  const userdata = useSelector((state) => state.auth.userdata);

  const submit = async (data) => {//if user wants to update an existing post then post object will be passed as prop otherwise it will be null for creating new post
    if (post) {
      const file = data.image[0]
        ? AppwriteService.uploadFile(data.image[0])
        : null;

      if (file) {
        AppwriteService.deleteFile(post.featuredImage);
      }

      const uppost = await AppwriteService.updatePost(post.id$, {
        ...data,

        featuredImage: file ? file.$id : undefined,

        if(uppost) {
          navigate(`/post/${uppost.$id}`);//here post id is used to navigate to the updated post page
        },
      });
    } else {// if user wants to create a new post
          const file = data.image[0] ? await AppwriteService.uploadFile(data.image[0]):null;
          //uploading image file to appwrite storage only if image exists

          if (file){
            fileid= file.$id;//filed id is unique identifier for the uploaded file in appwrite storage
            data.featuredImage= fileid;//featuredImage is the file id of the uploaded image
              const userpost= await AppwriteService.createPost({
              ...data,  //data contains title,content,slug,status this is the data entered in the form
              userId: userdata.$id,//userId is the id of the user who created the post
            });
              if(userpost){
                navigate(`post/${userpost.$id}`);//navigating to the newly created post page using post id
              }
          }
    }
  };
    const slugtransform = useCallback((values)=>{// it is used to remove spaces and special characters from the slug and convert it to lowercase
      if (values && typeof values === "string")
        return values
        .trim()
        .toLowerCase()
        .replace(/\s+/g,'-')
        .replace(/[^a-z0-9\-]/g,'');

      return '';;

    },[])
    useEffect(()=>{
      const subscription =watch((value,{name})=>{//useeffect to watch the title input field and update the slug field accordingly
        if (name === 'title'){
          setValue('slug',slugtransform(value.title,{shouldValidate:true}));//setting slug value based on title input by user
        }

      })

      return () => subscription.unsubscribe();
      
    },[watch,slugtransform,setValue])
  return (
      <div>Postform</div>
    );

}


export default Postform; 

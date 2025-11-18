import React from "react";
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

  const submit = async (data) => {
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
          navigate(`/post/${uppost.$id}`);
        },
      });
    } else {

    }
  };
}
  return <div>Postform</div>;


export default Postform;

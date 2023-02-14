import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

interface IUser {
  name: string;
  name2: string;
  id: string | number;
  avatar: string;
}




const UserDetail = () => {

  let params = useParams();
  const [User, setUser] = useState<IUser>();


  useEffect(() => {

    if (params.id) {
      getUser(params.id);
    }
  }, []);
  const getUser = (userId: string) => {
    console.log("getUser", userId)
    const url = "https://63a06c4ce3113e5a5c3d38d4.mockapi.io/Bai1/comments/" + params.id;
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setUser(data);

      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };


  function handleDelete(id: string | number): void {
    throw new Error("Function not implemented.");
  }

  function handleUpdate(id: string | number): void {
    throw new Error("Function not implemented.");
  }

  return (


    <>
      <div>


        <div className="row p-2 bg-white border rounded " >
          <div className="col-md-3 mt-1">
            <img
              className="img-fluid img-responsive rounded product-image"
              src={User?.avatar}
            />
          </div>
          <div className="col-md-6 mt-1">
            <h5>${User?.name}</h5>
            <div className="d-flex flex-row">
              <div className="ratings mr-2">
                <i className="fa fa-star"></i><i className="fa fa-star"></i
                ><i className="fa fa-star"></i><i className="fa fa-star"></i>
              </div>
              <span>${User?.name2}</span>
            </div>
            <div className="mt-1 mb-1 spec-1">
              <span>100% Nhựa cứng</span><span className="dot"></span
              ><span>Trọng lượng nhẹ</span><span className="dot"></span
              ><span><br /></span>
            </div>
            <div className="mt-1 mb-1 spec-1">
              <span>Thiết kế độc đáo</span><span className="dot"></span
              ><span>Sang trọng</span><span className="dot"></span
              ><span>Bền bỉ<br /></span>
            </div>

          </div>
          <div
            className="align-items-center align-content-center col-md-3 border-left mt-1"
          >
            <div className="d-flex flex-row align-items-center">
              <h4 className="mr-1">99.000đ</h4>
              <span className="strike-text"></span>
            </div>
            <h6 className="text-success">Free shipping</h6>
            {/* <div className="d-flex flex-column mt-4">
                <button className="btn btn-primary btn-sm"
                   onClick={() => handleUpdate(comments.id)}
                >Update
    
                </button
                >
                <Link className="btn btn-outline-primary btn-sm mt-2" to="/form">Thêm</Link>
                <button
                  className="btn btn-outline-primary btn-sm mt-2"
                  type="button" onClick={() => handleDelete(comments.id)}
                >
                  Xoá
                </button>
              </div> */}
          </div>

        </div>
      </div>



    </>
  );
}

export default UserDetail;

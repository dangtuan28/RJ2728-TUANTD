import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
// import "./WebList.css";
import styles from "./WebList.module.css";

type Props = {};

interface IUser {
  name: string;
  name2: string;
  id: string | number;
  avatar: "https://st.quantrimang.com/photos/image/2022/04/08/Hinh-nen-Luffy-Sun-God-Nika-1.jpg";
}

function WebStoreList(props: Props) {
  const navigate = useNavigate();
  const [listUser, setStoreList] = useState<Array<IUser>>([]);

  useEffect(() => {
    getListUser();
  }, []);
  const getListUser = () => {
    console.log("getListUser")
    const url = "https://63a06c4ce3113e5a5c3d38d4.mockapi.io/Bai1/comments";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        setStoreList(data);
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleDelete = (userId: string | number) => {
    const url = "https://63a06c4ce3113e5a5c3d38d4.mockapi.io/Bai1/comments/" + userId;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        getListUser();
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };

  const handleDetail = (userId: string | number) => {
    console.log("handleDetail", userId);
    navigate(`detail/${userId}`);
   
  };

  const handleUpdate = (userId: string | number) => {
    console.log("handleDetail", userId);
    navigate(`form/${userId}`);
    
  };
  return (

    <div>
      {listUser.map((comments) => (
        <div key={comments.id}>
          <div className="row p-2 bg-white border rounded " >
            <div className="col-md-3 mt-1">
              <img
                className="img-fluid img-responsive rounded product-image"
                src={comments.avatar}
              />
            </div>
            <div className="col-md-6 mt-1">
              <h5>{comments.name}</h5>
              <div className="d-flex flex-row">
                <div className="ratings mr-2">
                  <i className="fa fa-star"></i><i className="fa fa-star"></i
                  ><i className="fa fa-star"></i><i className="fa fa-star"></i>
                </div>
                <span>{comments.name2}</span>
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
              <div className="d-flex flex-column mt-4">
                <button className="btn btn-outline-primary btn-sm mt-2"
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
                <button
                  className="btn btn-outline-primary btn-sm mt-2"
                  type="button" onClick={() => handleDetail(comments.id)}
                >
                  Detail
                </button>

              </div>
            </div>

          </div>
        </div>

      ))}
    </div>


  );
}

export default WebStoreList;



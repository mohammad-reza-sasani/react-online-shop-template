import React from "react";

const CommentUserProduct = () => {
  return (
    <div>    
      <div className="commentUserProduct-title-parent">نظرات کاربران</div>      
      <div className="commentUserProduct-parent shadow-sm">
        {/* form  comment */}
        <div className="commentUserProduct-parent-form">
          <form>
            <div className="form-group">
              <span className="commentUserProduct-guid-send-comment">
                نظر خود را در این قسمت وارد کنید
              </span>
              <textarea
                className="form-control commentUserProduct-text-area"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </div>

            <button type="button" className="btn btn-success">
              <span>
                ارسال نظر <i className="fa fa-paper-plane-o" aria-hidden="true"></i>
              </span>
            </button>
          </form>
        </div>

        {/* comment User */}

        <div className="commentUserProduct-comment-parent shadow-sm">
            <div className="commentUserProduct-username-parent d-flex justify-content-end">
            <span className="commentUserProduct-username">محمدرضا</span>
            <i className="fa fa-user-circle-o commentUserProduct-user-icon" aria-hidden="true"></i>                
            </div>
            <div className="commentUserProduct-user-comment-text">
                <p>
            سلام

            شیوه تدریستون خیلی خوب است و مطالب رو خیلی خوب توضیح دادی
                </p>
            </div>
        </div>



      </div>
    </div>
  );
};

export default CommentUserProduct;

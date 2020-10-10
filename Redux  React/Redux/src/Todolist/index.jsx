import React, { useState } from 'react';
import './todolist.css'
import { ListGroup, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { createTask, editTask, deleteTask } from '../Redux/Actions/index'
import ModalDelete from '../ModalDelete'
import ModalCreateEndEdit from '../ModalCreateEndEdit'
function TodolistPage(props) {
    const { createTask, editTask, deleteTask, todolist } = props;
    const [listData, setListData] = useState([
        {
            id: 1,
            title: "hoc react",
            note: "ahihi"
        },
        {
            id: 2,
            title: "hoc HTML",
            note: "ahihi"
        },
    ]);

    console.log(todolist)
    // tạo 1 state trung gian để lưu giá trị truyền qua modal
    const [dataModalDelete, setDataModalDelete] = useState({});



    // hiễn thị cái modal ra
    const [showModalDelte, setShowModalDelete] = useState(false);

    //Tắt modal delete
    const handleCloseModalDelete = () => {
        setShowModalDelete(false)
        setDataModalDelete(null)// nếu không có giữliệu thì về null
    };

    //bật modal delete
    const handleShowModalDelete = (index) => {
        setDataModalDelete({ index: index })
        setShowModalDelete(true)
    };// khi bật modal truyền luôn cái index qua theo dạng obj

    //bật modal create and edit
    const [showModalCreateEndEdit, setShowModalCreateEndEdit] = useState(false);

    //tạo ra 1 state để lưu  giữ liệu truyền qua
    const [dataEdit, setDataEdit] = useState({});
    const handleShowModalCreateEndEdit = (type, modifleValue,idItem) => {
        //type là dùng để phân biệt giữa giữa create và edit
        //modifleValue là dùng để truyền tham số zô cái input để sửa edit(2)

        setDataEdit({
            type: type,
            title: modifleValue,
            id:idItem,
        })
        setShowModalCreateEndEdit(true)
    };// có giữ liệu  lưu dạng obj không có thì là obj rỗng
    const handleCloseModalCreateEndEdit = () => {
        setDataEdit({})
        setShowModalCreateEndEdit(false)
    };



    const [searchKey, setSearchKey] = useState('') // tạo 1 cái state để lưu giá trị ,giá trị cần search là string  cần search  tìm kiếm (3) 
    console.log(searchKey)
    const [isShowMoreNote, setIsShowMoreNote] = useState([])// để giá trị bang đầu là mảng rỗng toggle note (1)

    //hiển thị thêm 
    const [isShowMore, setisShowMore] = useState(false)

    // deleteItem
    function deleteItem(iddelete) {
    
        deleteTask({
           id:iddelete,
        })
        setShowModalDelete(null);
    }


    // submit form create
    function submitForm(values, type, idedit) {
        // type dùng để check nó create hay edit edit(4)
        // index dùng để  check vị trí của mình click edit(8)
        //truyền cái index qua là nó đưa dữ liệu lên input 
        console.log(values)
        if (type === "create") {
            createTask(
                {
                    id: Math.floor(Math.random() * 100),
                    title: values.title
                },
            )
            setShowModalCreateEndEdit(false)
        } else {// nếu nó  là edit thì làm giống xóa và thêm tham số thứ 3 là index edit(6)


            editTask({
                id: idedit,
                title: values.title,

            });

            setShowModalCreateEndEdit(false);
        }

    }

    // find in List

    function findValueList(e) {

        const { value } = e.target//lấy giá trị của input nớ ra
        setSearchKey(value)

    }


    // hiện và ẩn  note giống thêm vào giỏ hàng toggle(3)
    function handelToggleItem(id) {
        console.log(id)
        const moreIdToggle = isShowMoreNote.findIndex((moreId) => moreId === id)
        if (moreIdToggle === -1) {
            setIsShowMoreNote([
                ...isShowMoreNote,
                id
            ])
        } else {
            const newIsShowmoreNote = isShowMoreNote;
            newIsShowmoreNote.splice(moreIdToggle, 1);
            setIsShowMoreNote([
                ...newIsShowmoreNote
            ])

        }
    }
    //renderItem
    function renderItem() {
        return todolist.map((item, indexItem) => {
            if ((item.title.toLowerCase()).indexOf(searchKey) === -1) {// tìm trong cái key nớ có chư đó không   nếu =-1 tức không có thì  không reder (4)
                return null;
            } if (!isShowMore && indexItem > 4) {
                return null
            }
            else {
                return (
                    <ListGroup key={indexItem}>

                        <ListGroup.Item className="mb-2 d-flex justify-content-between align-items-center" >
                            <>

                                <div>
                                    <div>
                                        {item.id}
                                    </div>
                                    {isShowMoreNote.findIndex((id) => id === item.id) !== -1 // nếu id trong state mới bằng vs id trong data mà =-1 tức không có thì render ra thẻ toggle(4)
                                        && (
                                            <div>
                                                { item.note}
                                            </div>
                                        )}

                                </div>
                                {item.title}
                                <div>
                                    <Button variant="secondary"
                                        onClick={() => { handelToggleItem(item.id) }} >
                                        {isShowMoreNote.findIndex((moreid) => moreid === item.id) === -1 ? 'hiện' : 'Ẩn'}
                                        {/* toggle(5) */}
                                    </Button>
                                    {/* tạo nút ẩn và hiện , truyêền id qua toggle(2) */}
                                    <Button variant="secondary" onClick={() => handleShowModalCreateEndEdit('edit', item.title, item.id)} >Sửa </Button>
                                    {/* item.title là truyền dữ liệu qua modal edit(1) */}
                                    <Button variant="secondary" onClick={() => handleShowModalDelete(item.id)}>Xóa </Button>
                                </div>


                            </>
                        </ListGroup.Item>

                    </ListGroup>

                )
            }

        })
    }

    return (
        <div className="todo-List container ">
            <h3 className="text-center">Todo List</h3>
            <div className=" d-flex justify-content-between">
                <input type="text"
                    className="form-control"
                    placeholder=" Tìm kiếm....."
                    style={{ width: 400 }}
                    onChange={(e) => { findValueList(e) }} />
                {/* tìm kiếm (1) */}
                <Button variant="secondary " onClick={() => handleShowModalCreateEndEdit('create')}>Thêm Công Việc </Button>
            </div>


            <ModalCreateEndEdit
                handleShowModalCreateEndEdit={handleShowModalCreateEndEdit}
                showModalCreateEndEdit={showModalCreateEndEdit}
                handleCloseModalCreateEndEdit={handleCloseModalCreateEndEdit}
                submitForm={submitForm}
                dataEdit={dataEdit}

            />


            {renderItem()}


            <ModalDelete
                handleShowModalDelete={handleShowModalDelete}
                handleCloseModalDelete={handleCloseModalDelete}
                showModalDelte={showModalDelte}
                deleteItem={deleteItem}
                dataModalDelete={dataModalDelete}
            />
            {(!isShowMore && listData.length >= 5) && (
                <Button variant="secondary " onClick={() => setisShowMore(true)} >Hiển thị thêm </Button>
            )}
        </div>
    );
}

const mapStateToProps = (state) => {// lấy state từ store của reducers 
    // chuyển store thành props và sử dụng bình thường 
    console.log("TCL: mapStateToProps -> state", state);
    const { todolist } = state.todolistreducer;// lấy array của productsList tring store
    return {
        todolist,
    };

}
const mapDispatchToProps = (dispatch) => { // component gửi dispatch qua action  gửi đi bằng mã type và gói hàng (create(param))
    return {
        createTask: (params) => dispatch(createTask(params)), 
        // gửi gói hàng có tên là createTask có dữ liệu trong đó gọi là param
        editTask: (params) => dispatch(editTask(params)),
        deleteTask: (params) => dispatch(deleteTask(params))


    };
}// lấy action từ store
export default connect(mapStateToProps, mapDispatchToProps)(TodolistPage);
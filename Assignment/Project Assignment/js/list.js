$(function(){
    var storage = JSON.parse(localStorage.getItem("data"))
    var dataLength = storage["person"].length;
    
    for(var i=0; i<dataLength; i++){
        $("table").append("<tr><td>"
        + (storage["person"][i]["name"]) 
        + "</td><td>"
        + (storage["person"][i]["email"]) 
        + "</td><td>"
        + (storage["person"][i]["phoneNumber"]) 
        + "</td><td>" 
        + (storage["person"][i]["address"]) 
        + "</td><td>" + (storage["person"][i]["course"]) 
        + "</td><td><a class='edit' id='edit" + i + "'href='list-edit.html'>Edit</a></td><td><a class='delete' id='delete" + i + "' href='regList.html'>Delete</a></td</tr>");
    }
    $("a.edit").on("click", function(){
        var editIndex = $(this).attr("id");
        var eIndex = editIndex.replace("edit", "");
        localStorage.setItem("editIndex", eIndex);
    });
    $("a.delete").on("click", function(){
        var deleteIndex = $(this).attr("id");
        var dIndex = deleteIndex.replace("delete", "");
        dIndex = parseInt(dIndex);
        console.log(dIndex);

        var arr = JSON.parse(localStorage.getItem("data"));
        arr["person"].splice(dIndex, 1);
        localStorage.setItem("data", JSON.stringify(arr));
        location.reload();
    });
})
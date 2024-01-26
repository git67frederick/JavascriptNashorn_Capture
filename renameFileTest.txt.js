//=============================================================================================
//  example call
//"C:\Program Files\Java\jre1.8.0_351\bin\jjs.exe" renameTet.txt.js
// file test:
//  Create - Delete - Rename
// in java.io.File class
//  createNewFile -- delete -- renameTo
//--------------------------------------------------------
//  replace   print(
//  with     Log2Output(ctx,
//=============================================================================================
var file1 = Java.type("java.io.File");
var file2 = Java.type("java.io.File");
locationOfNewContentOFRRenameStart = "C:/work/javascript/orig_new.upd";
locationOfNewContentOFRRenameEnd   = "C:/work/javascript/orig_renamed.upd";
print("---------------------| input summary |--------------------");
print( "var locationOfNewContentOFRRenameStart = "+ locationOfNewContentOFRRenameStart);
print( "var locationOfNewContentOFRRenameEnd   = "+ locationOfNewContentOFRRenameEnd);
//
file1 = new java.io.File(locationOfNewContentOFRRenameStart);
file2 = new java.io.File(locationOfNewContentOFRRenameEnd);
var success_op =file1.createNewFile();
print("---------------------| file create |--------------------");
print("file1 created:" + success_op);
//
print("---------------------| rename test |--------------------");
if (file1.exists()){  
 print("file1 exists:" + file1.exists());
 print("file2 exists:" + file2.exists());
//
 var success_op2 =file1.renameTo(file2);
 print("Rename file1 to file2 success:" + success_op2);
//
 print("file1 exists:" + file1.exists());
 print("file2 exists:" + file2.exists());
 //
 print("file1 as:" + file1.getName());
 print("file2 as:" + file2.getName());
 //
 print("file1 at:" + file1.getAbsoluteFile());
 print("file2 at:" + file2.getAbsoluteFile());

}
print("---------------------| cleaning |--------------------");
// clean file1
if (file1.exists()){  
 print("file1 exists:" + file1.exists());
 print("file2 exists:" + file2.exists());
 //
 print("Delete file1 success:"+file1.delete());
 //
 print("file1 exists:" + file1.exists());
 print("file2 exists:" + file2.exists());
 
}
//clean file2
if (file2.exists()){  
 print("file1 exists:" + file1.exists());
 print("file2 exists:" + file2.exists());
 //
 print("Delete file2 success:"+file2.delete());
 //
 print("file1 exists:" + file1.exists());
 print("file2 exists:" + file2.exists());
 
}

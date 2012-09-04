var moveSpeed: float = 200.0;
var turnSpeed: float = 1.0;


function Update () 
{

	if(Input.GetButton("Forward"))
	{
		transform.position += transform.forward * moveSpeed * Time.deltaTime;
	}
	if(Input.GetButton("Backward"))
	{
		transform.position += -transform.forward * moveSpeed * Time.deltaTime;
	}
    
    if(Input.GetButton("Up"))
	{
		transform.position += transform.up * moveSpeed * Time.deltaTime;
	}
	if(Input.GetButton("Down"))
	{
		transform.position += -transform.up * moveSpeed * Time.deltaTime;
	}
    
    //up and down
    
    /*
    if(Input.GetAxis("Vertical"))
    {
        transform.position += transform.forward * moveSpeed * Time.deltaTime;
    }
    
    if(Input.GetAxis("Horizontal"))
    {
        transform.position += transform.right * moveSpeed * Time.deltaTime;
    }
    */
    
    /*
	if(Input.GetButton("Left"))
	{
		transform.eulerAngles.y += -turnSpeed * Time.deltaTime;
	}
	if(Input.GetButton("Right"))
	{
		transform.eulerAngles.y += turnSpeed * Time.deltaTime;
	}
    */
	if(Input.GetButton("Strafe Right"))
	{
		transform.position += transform.right * moveSpeed * Time.deltaTime;
		//This code resets position
		//transform.position.x -= transform.position.x * moveSpeed * Time.deltaTime;
		//1.0;
	}
	if(Input.GetButton("Strafe Left"))
	{
		transform.position += -transform.right * moveSpeed * Time.deltaTime;
	}
    /**/
	
//	if(Input.GetButton("Strafe Left"))
//	{
//		transform.position.x += -transform.forward * moveSpeed * Time.deltaTime;
//	}
//	if(Input.GetButton("Strafe Right"))
//	{
//		transform.position.x += transform.forward * moveSpeed * Time.deltaTime;
//	}

//	if(Input.GetButton("Jump"))
//	{
//		transform.position.y += moveSpeed * Time.deltaTime;
//	}

//
}

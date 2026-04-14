using Microsoft.AspNetCore.Mvc;

namespace Test_API.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class SubjectController : ControllerBase
  {
    private static List<string> ListofSubject =
    [
        "Math", "Science", "English", "History", "Geography", "Physics", "Chemistry", "Biology", "Computer Science", "Art"
    ];

    [HttpGet(Name = "GetSubjects")]
    public IEnumerable<string> Get()
    {
      return ListofSubject;
    }

    [HttpPost(Name = "Subject")]
    public IActionResult Post([FromBody] string subject)
    {
      if (string.IsNullOrEmpty(subject) || !ModelState.IsValid)
      {
        return BadRequest("Subject cannot be empty");
      }
      ListofSubject.Add(subject);
      return Ok(ListofSubject);
    }

    [HttpPut(Name = "Subject")]
    public IActionResult Put([FromBody] string subject, [FromQuery]int id)
    {
      if (id < 0 || id >= ListofSubject.Count)
      {
        return BadRequest("Invalid ID");
      }
      ListofSubject[id] = subject;
      return Ok(ListofSubject);
    }


    [HttpDelete(Name = "Subject")]
    public IActionResult Delete([FromQuery]int id)
    {
      ListofSubject.RemoveAt(id);
      return Ok(ListofSubject);
    }
  }
}

using Microsoft.AspNetCore.Mvc;

namespace Test_API.Controllers
{
  [ApiController]
  [Route("[controller]")]
  public class WeatherForecastController : ControllerBase
  {
    private List<string> Summaries =
    [
        "Freezing", "Bracing", "Chilly", "Cool", "Mild", "Warm", "Balmy", "Hot", "Sweltering", "Scorching"
    ];

    [HttpGet(Name = "GetWeatherForecast")]
    public IEnumerable<WeatherForecast> Get()
    {
      return Enumerable.Range(1, 5).Select(index => new WeatherForecast
      {
        Date = DateOnly.FromDateTime(DateTime.Now.AddDays(index)),
        TemperatureC = Random.Shared.Next(-20, 55),
        Summary = Summaries[Random.Shared.Next(Summaries.Count)]
      })
      .ToArray();
    }

    [HttpPost(Name = "WeatherForecast")]
    public IActionResult Post([FromBody] WeatherForeCast weatherForeCast)
    {
      if (string.IsNullOrEmpty(weatherForeCast.Sumary) || !ModelState.IsValid)
      {
        return BadRequest("Summary cannot be empty");
      }
      this.Summaries.Add(weatherForeCast.Sumary);
      return Ok(this.Summaries);
    }

    [HttpPut(Name = "WeatherForecast")]
    public IActionResult Put([FromBody] WeatherForeCast weatherForeCast)
    {
      if (weatherForeCast.Id < 0 || weatherForeCast.Id >= this.Summaries.Count)
      {
        return BadRequest("Invalid ID");
      }
      this.Summaries[weatherForeCast.Id] = weatherForeCast.Sumary;
      return Ok(this.Summaries);
    }

    [HttpDelete(Name = "WeatherForecast")]
    public IActionResult Delete([FromQuery]int id)
    {
      this.Summaries.RemoveAt(id);
      return Ok(this.Summaries);
    }
  }
}

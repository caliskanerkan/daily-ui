import { Card } from '../../components/Card';
import { Image } from '../../components/Image';
import { Link } from '../../components/Link';
import { Text } from '../../components/Text';
import { SIZE } from '../../theme/Size';
import { FaLinkedinIn, FaGithub, FaHackerrank } from 'react-icons/fa';
import { COLOR } from '../../theme/Colors';

export const UserProfile = () => {
  return (
    <Card className="w-2/3 m-4 grid grid-cols-5 gap-4 p-10">
      <div className="flex flex-col gap-2 col-span-1 self-start">
        <Image
          full
          circle
          className="items-center"
          src="https://media-exp1.licdn.com/dms/image/C4E03AQHy-286ZH5KPw/profile-displayphoto-shrink_800_800/0/1528912626096?e=1659571200&v=beta&t=iHiIboNdhvFqLQOFrIf4GdBOZLXFt4pQtN4MdWpvUhE"
        />
        <div className="pl-4">
          <Text size={SIZE.XL} as="h1">
            Erkan Çalışkan
          </Text>
          <Text size={SIZE.XS} as="h6">
            Frontend Developer
          </Text>
          <div className="flex gap-2 flex-nowrap mt-4">
            <Link
              size={SIZE.XS}
              color={COLOR.INDIGO}
              href="https://www.linkedin.com/in/caliskanerkan/"
              target="_blank"
            >
              <FaLinkedinIn size={32} />
            </Link>
            <Link
              size={SIZE.XS}
              color={COLOR.GRAY}
              href="https://www.linkedin.com/in/caliskanerkan/"
              target="_blank"
            >
              <FaGithub size={32} />
            </Link>
            <Link
              size={SIZE.XS}
              color={COLOR.GREEN}
              href="https://www.linkedin.com/in/caliskanerkan/"
              target="_blank"
            >
              <FaHackerrank size={32} />
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-3">
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ab, autem nostrum corrupti amet,
        itaque nisi totam facere harum maxime laudantium eius, doloribus dolorem voluptatem
        provident quasi recusandae eligendi quibusdam quo. Error incidunt fugit asperiores, delectus
        cum, consectetur maiores voluptatem quos labore quaerat modi necessitatibus soluta sapiente.
        Ipsum molestias, commodi consequatur iure non nam repellendus quisquam optio, nihil
        architecto modi numquam. Impedit ducimus amet excepturi voluptatem, quo possimus culpa neque
        facilis nulla, vel reiciendis iure magni enim animi ab quam. Totam laborum illo et doloribus
        ratione laboriosam aspernatur aliquam officiis eos.
      </div>
      <div className="col-span-1">tags</div>
    </Card>
  );
};
